import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tag from 'clean-tag';
import { isEmpty, omit } from 'lodash';
import { themeGet, width } from 'styled-system';
import Link from '../../../../../src/components/atoms/Link';

const StyledTable = styled(tag.table)`
  border-collapse: collapse;
  text-align: left;
  font-size: ${themeGet('fontSizes.s')}px;
  margin-bottom: ${themeGet('space.xl')}px;
  ${width};
  td,
  th {
    padding: 6px 10px;
    border: 1px solid ${themeGet('colors.grayscale.300')};
  }
`;

class PropsTable extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
  };

  state = {
    isOpenedStyledProps: false,
  };

  toggleStyledProps = () => {
    this.setState(prevState => ({
      isOpenedStyledProps: !prevState.isOpenedStyledProps,
    }));
  };

  render() {
    const { component } = this.props;
    const { isOpenedStyledProps } = this.state;
    // eslint-disable-next-line
    const allProps = component.propTypes;
    // eslint-disable-next-line
    const componentProps = component.__docgenInfo.props;
    const componentPropsKeys = componentProps && Object.keys(componentProps);
    const styledProps = omit(allProps, componentPropsKeys);
    const styledPropsKeys = Object.keys(styledProps);

    return (
      <>
        {componentProps && (
          <StyledTable>
            <thead>
              <tr>
                <th>Prop name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {componentPropsKeys.map(obj => {
                const { defaultValue, type, description } = componentProps[obj];
                const val = defaultValue ? defaultValue.value : '';
                return (
                  <tr key={obj}>
                    <td>{obj}</td>
                    <td>{type.name}</td>
                    <td>{val.replace(/'/gi, '')}</td>
                    <td>
                      {description}
                      {type.value &&
                        type.value.map(({ value, name }, i) => {
                          const n = type.name === 'enum' ? value : name;
                          return (
                            <Fragment key={n}>
                              {i ? ', ' : 'One of: '}
                              {n.replace(/'/gi, '')}
                            </Fragment>
                          );
                        })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </StyledTable>
        )}
        {!isEmpty(styledProps) && (
          <StyledTable width="100%">
            <thead>
              <tr>
                <th
                  onClick={this.toggleStyledProps}
                  style={{ cursor: 'pointer' }}
                >
                  Styled system prop names
                </th>
              </tr>
            </thead>
            <tbody style={{ display: !isOpenedStyledProps && 'none' }}>
              <tr>
                <td>
                  {styledPropsKeys.map((prop, i) => `${i ? ', ' : ''}${prop}`)}.
                  (
                  <Link
                    underline={1}
                    href="https://github.com/jxnblk/styled-system/blob/master/docs/table.md"
                  >
                    reference table
                  </Link>
                  )
                </td>
              </tr>
            </tbody>
          </StyledTable>
        )}
      </>
    );
  }
}

export default PropsTable;
