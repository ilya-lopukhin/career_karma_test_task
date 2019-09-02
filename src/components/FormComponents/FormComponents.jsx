import React from 'react';
import { Flex, Text } from 'styled';
import { Field } from 'formik';
import {
  Form as AForm,
  Input,
  InputNumber,
  Checkbox,
  Select,
  DatePicker,
} from '@jbuschke/formik-antd';

import Icon from '../Icon';

export const FormInput = ({ label, width = '100%', ...props }) => (
  <Flex column spacing={10} width={width}>
    <Text size="12px" {...props.labelProps}>
      {label}
    </Text>
    {props.type === 'number'
      ? <InputNumber size="large" {...props} />
      : <Input size="large" {...props} />
    }
  </Flex>
);

export const FormDatePicker = ({ label, width = '100%', ...props }) => (
  <Flex column spacing={10} width={width}>
    <Text size="12px">
      {label}
    </Text>
    <DatePicker size="large" {...props} />
  </Flex>
);

export const FormTextArea = ({ label, width = '100%', ...props }) => (
  <Flex column spacing={10} width={width}>
    <Text.Lightest size="12px">
      {label}
    </Text.Lightest>
    <Input.TextArea size="large" {...props} />
  </Flex>
);

export const FormSelect = ({ label, width = '100%', children, ...props }) => (
  <Flex column spacing={10} width={width}>
    <Text size="12px">
      {label}
    </Text>
    <Select size="large" {...props}>
      {children}
    </Select>
  </Flex>
);

export const StatusBox = ({ value, label, icon, onChange }) => (
  <Flex
    width="150px"
    height="44px"
    padding="0px 12px"
    borderRadius="4px"
    justify="center"
    align="center"
    spacing={16}
    clickable
    onClick={() => onChange({ target: { value: label } })}
    border={`1px solid ${value === label ? '#3C91E6' : '#ECECEC'}`}
  >
    <Icon type={icon} />
    <Text>
      {label} 
    </Text>
    <Flex height="24px" width="24px" align="center" justify="center">
      {value === label && <Icon type="check" />}
    </Flex>
  </Flex>
);

export const Rating = ({ label, name, onChange }) => {
  return (
    <Field
      name={name}
      render={({ field: { value } }) => (
        <Flex column spacing={8}>
          <Text size="12px">
            {label}
          </Text>
          <Flex spacing={8}>
            {Array(5).fill(0).map((_, i) =>
              <Flex clickable onClick={() => onChange(name, i)}>
                <Icon type="star" color={i <= value ? '#FE9F35' : '#ECECEC'} />
              </Flex>
            )}
          </Flex>
        </Flex>
      )}
    />
  );
}
