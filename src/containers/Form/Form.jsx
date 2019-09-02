import React from 'react';
import { Formik, Field } from 'formik';
import { Flex, Text, colors } from 'styled';
import { Button } from 'antd';
import { Form as AForm, Checkbox, Select } from '@jbuschke/formik-antd';
import {
  FormInput,
  FormDatePicker,
  FormTextArea,
  FormSelect,
  StatusBox,
  Rating,
} from 'components';

import appAcademy from '../../images/appAcademy.png';
import Guidelines from './Guidelines';

const STATUSES = [
  {
    icon: 'certificate',
    label: 'Graduate',
  },
  {
    icon: 'cap',
    label: 'Student',
  },
  {
    icon: 'clipboard',
    label: 'Applicant',
  },
];

const TUITION_PAYMENT_OPTIONS = [
  {
    name: 'upfront',
    label: 'Upfront',
  },
  {
    name: 'isa',
    label: 'ISA',
  },
  {
    name: 'financing',
    label: 'Financing',
  },
  {
    name: 'scholarship',
    label: 'Scholarship',
  },
  {
    name: 'stipend',
    label: 'Stipend',
  },
]

const Form = () => {
  return (
    <Flex width="100%" spacing={30} padding="0 0 200px 0">
      <Formik
        initialValues={{
          status: 'Graduate',
          employed: true,
        }}
      >
        {({ setFieldValue, values }) => (
          <AForm>
            <Flex column width="100%" spacing={30}>
              <Flex column width="100%" spacing={30}>
                <Flex
                  background="#3C91E6"
                  borderRadius="4px"
                  padding="18px"
                  justify="center"
                  width="100%"
                >
                  <Text color="white">Already have an account? Sign in</Text> 
                </Flex>
                <Flex spacing={20}>
                  <img src={appAcademy} />
                  <Text size="28px">
                    Add review for App Academy
                  </Text>
                </Flex>
              </Flex>
              <Flex column spacing={20} width="100%">
                <Flex wrap spacing={20} width="100%">
                  <FormInput
                    width="calc(50% - 20px)"
                    name="firstName"
                    label="First Name"
                    labelProps={{ color: colors.text.lightest }}
                    placeholder="First Name"
                  />
                  <FormInput
                    width="calc(50% - 20px)"
                    name="lastName"
                    label="Last Name"
                    labelProps={{ color: colors.text.lightest }}
                    placeholder="Last Name"
                  />
                  <FormInput
                    width="calc(50% - 20px)"
                    name="email"
                    label="Email"
                    labelProps={{ color: colors.text.lightest }}
                    placeholder="Email"
                  />
                </Flex>
                <Checkbox name="anonymous">Keep Anonymous?</Checkbox>
              </Flex>
              <Flex column>
                <Text>
                  Status
                </Text>
                <Field
                  name="status"
                  render={({ field }) => (
                    <Flex spacing={20}>
                      {STATUSES.map(st => (
                        <StatusBox
                          {...st}
                          {...field}
                          onChange={() => setFieldValue('status', st.label)}
                        />
                      ))}
                    </Flex>
                  )}
                >
                </Field>
              </Flex>
              <Flex column spacing={20}>
                <Text size="18px">
                  Ratings
                </Text>
                <Flex spacing={64}>
                  <Rating
                    name="ratings.overallExperience"
                    label="Overall experience"
                    onChange={setFieldValue}
                  />
                  <Rating
                    name="ratings.jobSupport"
                    label="Job Support"
                    onChange={setFieldValue}
                  />
                </Flex>
                <Flex spacing={64}>
                  <Rating
                    name="ratings.instructors"
                    label="Instructors"
                    onChange={setFieldValue}
                  />
                  <Rating
                    name="ratings.curriculum"
                    label="Curriculum"
                    onChange={setFieldValue}
                  />
                </Flex>
              </Flex>
              <Flex column width="100%" spacing={20}>
                <FormInput
                  name="title"
                  label="Title"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                />
                <FormTextArea
                  name="review"
                  label="Your review"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  rows={4}
                />
                <FormTextArea
                  name="pros"
                  label="Pros"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  rows={4}
                />
                <FormTextArea
                  name="cons"
                  label="Cons"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  rows={4}
                />
              </Flex>
              <Flex column spacing={20} width="100%">
                <Flex column width="50%" spacing={20}>
                  <FormSelect name="school" label="School">
                    <Select.Option value="app-academy">App Academy</Select.Option>
                    <Select.Option value="web-pal">Web Pal</Select.Option>
                  </FormSelect>
                  <FormSelect name="course" label="Course">
                    <Select.Option value="react">React 101</Select.Option>
                  </FormSelect>
                  <FormSelect name="programType" label="Program Type">
                    <Select.Option value="full-time">Full Time</Select.Option>
                    <Select.Option value="part-time">Part Time</Select.Option>
                  </FormSelect>
                </Flex>
                <Flex column width="70%" spacing={20}>
                  <Text size="12px">
                    Tuition Payment
                  </Text>
                  <Flex wrap spacing={20}>
                    {TUITION_PAYMENT_OPTIONS.map(op => (
                      <Checkbox name={op.name}>
                        {op.label}
                      </Checkbox>
                    ))}
                  </Flex>
                </Flex>
                <Flex column width="50%" spacing={20}>
                  <FormSelect name="location" label="Location">
                    <Select.Option value="full-time">US</Select.Option>
                    <Select.Option value="part-time">Non-US</Select.Option>
                  </FormSelect>
                </Flex>
              </Flex>
              <Flex column width="100%" spacing={20}>
                <FormDatePicker name="graduationDate" label="Graduation Date" />
                <Field
                  name="employed"
                  render={({ field: { value } }) => (
                    <Flex>
                      <Button
                        type={value ? 'primary' : 'default'}
                        onClick={() => setFieldValue('employed', true)}
                      >
                        Yes, I'm employed
                      </Button>
                      <Button
                        type={!value ? 'primary' : 'default'}
                        onClick={() => setFieldValue('employed', false)}
                      >
                        No, I'm no employed
                      </Button>
                    </Flex>
                  )}
                />
                <FormInput
                  type="number"
                  disabled={!values.employed}
                  name="timeTilOffer"
                  label="How long did it take you to find a job?  (months)"
                />
                <FormInput
                  label="What is your salary (confidential)?  ($)"
                  disabled={!values.employed}
                  type="number"
                  name="salary"
                />
              </Flex>
              <Button type="sumbit">SUBMIT REVIEW</Button>
            </Flex>
          </AForm>
        )}
      </Formik>
      <Guidelines />
    </Flex>
  )
}

export default Form;
