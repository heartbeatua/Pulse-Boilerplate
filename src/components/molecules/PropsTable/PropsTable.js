import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tag from 'clean-tag';
import parseDoc from 'system-docs';
import { isEmpty } from 'lodash';
import Link from '../../atoms/Link/index';

const StyledTable = styled(tag.table)`
  border-collapse: collapse;
  text-align: left;
  font-size: 18px;
  margin: 0 0 40px;
  td,
  th {
    padding: 6px 10px;
    border: 1px solid #eee;
  }
`;

const Table = ({ component }) => {
  const parsed = parseDoc(component);
  // eslint-disable-next-line
  const componentProps = parsed.__docgenInfo.props;
  const styledProps = parsed.propTypes;

  return (
    <Fragment>
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
            <Fragment>
              {Object.keys(componentProps).map(obj => {
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
            </Fragment>
          </tbody>
        </StyledTable>
      )}
      {!isEmpty(styledProps) && (
        <StyledTable>
          <thead>
            <tr>
              <th>
                <Link
                  underline
                  href="https://github.com/jxnblk/styled-system/blob/master/docs/table.md"
                  target="_blank"
                >
                  Styled system prop names
                </Link>
              </th>
            </tr>
            <tr>
              <td>
                {Object.keys(styledProps).map((obj, i) => {
                  const { prop } = styledProps[obj];
                  return `${i ? ', ' : ''}${prop}`;
                })}
              </td>
            </tr>
          </thead>
        </StyledTable>
      )}
    </Fragment>
  );
};

Table.propTypes = {
  component: PropTypes.func.isRequired
};

export default Table;
