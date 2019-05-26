import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import {
  LiveProvider,
  LiveEditor as ReactLiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';
import editorTheme from './theme';
import Box from '../../../../../src/components/atoms/Box';

const LiveEditor = ({ theme, ...rest }) => {
  const { colors, fontSizes } = theme;
  return (
    <Box mt="-1px">
      <LiveProvider {...rest} theme={editorTheme}>
        <Box border="1px solid" borderColor="grayscale.300" p="s">
          <LivePreview />
        </Box>
        <Box border="1px solid black" borderColor="grayscale.300" borderTop={0}>
          <ReactLiveEditor
            style={{
              fontSize: fontSizes.s,
              background: '#f3f3f3',
            }}
          />
        </Box>
        <LiveError
          style={{
            margin: 0,
            padding: '4px 8px',
            background: colors.error,
            fontSize: fontSizes.xs,
            color: '#fff',
          }}
        />
      </LiveProvider>
    </Box>
  );
};

LiveEditor.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any),
};

export default withTheme(LiveEditor);
