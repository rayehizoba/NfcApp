import React from 'react';
import tw from '../lib/tailwind';
import {getValidationErrors} from '../lib/helpers';
import {Text} from 'react-native';

const ValidatedComponent = props => {
  const {
    activeStyle = tw`border-danger`,
    renderComponent,
    inactiveStyle = tw``,
    errors,
    style,
    name,
  } = props;
  const validationErrors = getValidationErrors(errors, name);
  const childStyle = validationErrors ? activeStyle : inactiveStyle;
  const child = renderComponent([style, childStyle]);

  return (
    <>
      {child}
      {validationErrors && (
        <Text style={tw`text-danger text-xs italic mt-1`}>
          {validationErrors}
        </Text>
      )}
    </>
  );
};

export default ValidatedComponent;
