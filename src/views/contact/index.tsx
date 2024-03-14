import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { toast } from 'react-toastify'
import { AnimatedSubText, AnimatedTitle, Button, BackButton } from 'components'
import { useCursorContext } from 'contexts'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

import styles from './styles.module.css'

const validationSchema = yup.object({
  FullName: yup.string().required('Name required'),
  CompanyName: yup.string().required('Company Name required'),
  Email: yup.string().email('Invalid email').required('Email required'),
  Tel: yup.string().typeError('Please enter a valid phone number').required('Phone required'),
  Budget: yup.string().required('Budget required'),
  ProjectDescription: yup.string().required('Project description required'),
})

const View = () => {
  const { setCursorStyle } = useCursorContext()

  const smallTextCursorProps = {
    onMouseOver: () => setCursorStyle('smallText'),
    onMouseOut: () => setCursorStyle('none'),
  }

  const radioButtonCursorProps = {
    onMouseOver: () => setCursorStyle('medium'),
    onMouseOut: () => setCursorStyle('none'),
  }

  const [disableSubmitBtn, setDisableSubmitBtn] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      FullName: '',
      CompanyName: '',
      Email: '',
      Tel: '',
      Budget: '',
      ProjectDescription: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setDisableSubmitBtn(true)
      await fetch('https://hooks.zapier.com/hooks/catch/17945339/3eo258h', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify(values, null, 2),
      }).then(async (response) => {
        if (response.status === 200) {
          resetForm()
          toast.success(
            'Thank you for sharing your idea! Your message has been successfully sent. We appreciate your interest and will get back to you as soon as possible.',
          )
          setDisableSubmitBtn(false)
        } else {
          resetForm()
          toast.error(
            'Oops! Something went wrong. Please check your entries and try again. If the problem persists, feel free to email us directly at contanct@techzy.app.',
          )
          setDisableSubmitBtn(false)
        }
      })
    },
  })

  return (
    <div className='container'>
      <div className={styles.formBox}>
        <div className='row'>
          <div className='col-5'>
            <div className={styles.leftBox}>
              <BackButton />
              <div className={styles.infoBox}>
                <AnimatedTitle size='medium' disableX>
                  Contact us
                </AnimatedTitle>

                <div className={styles.descriptionBox}>
                  <AnimatedSubText startY={'0px'} endY={'0px'} size='medium'>
                    Fill out the form, and a member of our team will reach out to you to discuss how we can help.
                  </AnimatedSubText>
                </div>
              </div>
            </div>
          </div>
          <div className='col-7'>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
              <div className='row'>
                <div className='col-6'>
                  <div className={styles.inputField}>
                    <FormControl fullWidth>
                      <TextField
                        label='Name'
                        name='FullName'
                        value={formik.values.FullName}
                        onChange={formik.handleChange}
                        error={formik.touched.FullName && Boolean(formik.errors.FullName)}
                      />
                    </FormControl>
                  </div>
                </div>
                <div className='col-6'>
                  <div className={styles.inputField}>
                    <FormControl fullWidth>
                      <TextField
                        label='Company Name'
                        name='CompanyName'
                        value={formik.values.CompanyName}
                        onChange={formik.handleChange}
                        error={formik.touched.CompanyName && Boolean(formik.errors.CompanyName)}
                      />
                    </FormControl>
                  </div>
                </div>
                <div className='col-6'>
                  <div className={styles.inputField}>
                    <FormControl fullWidth>
                      <TextField
                        label='Email Address'
                        name='Email'
                        value={formik.values.Email}
                        onChange={formik.handleChange}
                        error={formik.touched.Email && Boolean(formik.errors.Email)}
                      />
                    </FormControl>
                  </div>
                </div>
                <div className='col-6'>
                  <div className={styles.inputField}>
                    <FormControl fullWidth>
                      <TextField
                        label='Phone Number'
                        name='Tel'
                        value={formik.values.Tel}
                        onChange={formik.handleChange}
                        error={formik.touched.Tel && Boolean(formik.errors.Tel)}
                      />
                    </FormControl>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.inputField}>
                    <FormControl fullWidth>
                      <div className='Mui-RadioGroup-label'>Est. Budget</div>
                      <RadioGroup name='Budget' onChange={formik.handleChange} className='Mui-Radio-group'>
                        <FormControlLabel
                          value={'Under $25,000'}
                          control={<Radio />}
                          label='Under $25,000'
                          className={clsx('Mui-Radio-label', {
                            ['Mui-Radio-error']: formik.touched.Budget && Boolean(formik.errors.Budget),
                          })}
                          {...radioButtonCursorProps}
                        />
                        <FormControlLabel
                          value={'$25,000 - $200,000'}
                          control={<Radio />}
                          label='$25,000 - $200,000'
                          className={clsx('Mui-Radio-label', {
                            ['Mui-Radio-error']: formik.touched.Budget && Boolean(formik.errors.Budget),
                          })}
                          {...radioButtonCursorProps}
                        />
                        <FormControlLabel
                          value={'$200,000 - $500,000'}
                          control={<Radio />}
                          label='$200,000 - $500,000'
                          className={clsx('Mui-Radio-label', {
                            ['Mui-Radio-error']: formik.touched.Budget && Boolean(formik.errors.Budget),
                          })}
                          {...radioButtonCursorProps}
                        />
                        <FormControlLabel
                          value={'Over $500,000'}
                          control={<Radio />}
                          label='Over $500,000'
                          className={clsx('Mui-Radio-label', {
                            ['Mui-Radio-error']: formik.touched.Budget && Boolean(formik.errors.Budget),
                          })}
                          {...radioButtonCursorProps}
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.inputField}>
                    <FormControl fullWidth>
                      <TextField
                        className='MuiInputMultiline'
                        label='Project Description'
                        multiline
                        rows={3}
                        name='ProjectDescription'
                        value={formik.values.ProjectDescription}
                        onChange={formik.handleChange}
                        error={formik.touched.ProjectDescription && Boolean(formik.errors.ProjectDescription)}
                      />
                    </FormControl>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={clsx('row', styles.formBottom)}>
                    <div className='col-5 d-flex align-items-center'>
                      <Button
                        label='Get in touch'
                        type='submit'
                        disabled={disableSubmitBtn}
                        loading={disableSubmitBtn}
                      />
                    </div>
                    <div className='col-7 d-flex align-items-center justify-content-end'>
                      <div className={styles.tcText}>
                        By sending, I agree to the{' '}
                        <Link href='./terms-and-conditions' target='_blank' {...smallTextCursorProps}>
                          terms and conditions.
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
