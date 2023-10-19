import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  payment_status: yup.string().nullable(),
  invoice_date: yup.date().required(),
  payment_due_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
