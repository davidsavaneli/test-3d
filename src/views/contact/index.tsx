import React, { useState } from 'react'
import Link from 'next/link'
import { useLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import { AnimatedSubText, AnimatedTitle, MagneticLayout, Button } from 'components'
import { useCursorContext } from 'contexts'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

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
  const lenis = useLenis()

  const handleStopScrolling = () => lenis.stop()
  const handleStartScrolling = () => lenis.start()

  const { setCursorStyle } = useCursorContext()

  const closeCursorProps = {
    onMouseOver: () => setCursorStyle('button'),
    onMouseOut: () => setCursorStyle('none'),
  }

  const smallTextCursorProps = {
    onMouseOver: () => setCursorStyle('smallText'),
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
          console.log('success')
          setDisableSubmitBtn(false)
        } else {
          resetForm()
          console.log('error')
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
              <MagneticLayout>
                <Link scroll={false} href='./' className={styles.closeBtn} {...closeCursorProps}>
                  <div className={styles.closeBtnBg}></div>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={styles.closeIcon}>
                    <path
                      className={styles.closeIconPath}
                      d='M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z'
                    />
                  </svg>
                </Link>
              </MagneticLayout>
              <div className={styles.infoBox}>
                <AnimatedTitle animationDirection='rtl' size='medium' disableX>
                  Contact
                </AnimatedTitle>
                <AnimatedTitle animationDirection='ltr' size='medium' disableX>
                  Us
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
                      <TextField
                        className='MuiSelect'
                        select
                        SelectProps={{
                          IconComponent: () => (
                            <div className='MuiSelect-icon'>
                              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                                <path
                                  fillRule='evenodd'
                                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                                />
                              </svg>
                            </div>
                          ),
                          onOpen: () => handleStopScrolling(),
                          onClose: () => handleStartScrolling(),
                        }}
                        label='Est. Budget'
                        name='Budget'
                        value={formik.values.Budget}
                        onChange={formik.handleChange}
                        error={formik.touched.Budget && Boolean(formik.errors.Budget)}
                      >
                        <MenuItem value={'Under $25,000'}>{'Under $25,000'}</MenuItem>
                        <MenuItem value={'$25,000 - $200,000'}>{'$25,000 - $200,000'}</MenuItem>
                        <MenuItem value={'$200,000 - $500,000'}>{'$200,000 - $500,000'}</MenuItem>
                        <MenuItem value={'Over $500,000'}>{'Over $500,000'}</MenuItem>
                      </TextField>
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
                    <div className='col-6 d-flex align-items-center'>
                      <Button
                        label='Get in touch'
                        type='submit'
                        disabled={disableSubmitBtn}
                        loading={disableSubmitBtn}
                      />
                    </div>
                    <div className='col-6 d-flex align-items-center justify-content-end'>
                      <div className={styles.tcText}>
                        By sending, I agree to the{' '}
                        <Link href='https://www.google.com/' target='_blank' {...smallTextCursorProps}>
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
