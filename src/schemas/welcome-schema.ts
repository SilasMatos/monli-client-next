import { z } from 'zod'

export const welcomeSchema = z.object({
  initialBalance: z.string().min(1, 'Saldo inicial é obrigatório'),
  theme: z.enum(['light', 'dark', 'system'], {
    required_error: 'Selecione um tema'
  }),
  language: z.enum(['pt-BR', 'en-US', 'es-ES', 'fr-FR'], {
    required_error: 'Selecione um idioma'
  }),
  currency: z.enum(['BRL', 'USD', 'EUR', 'GBP'], {
    required_error: 'Selecione uma moeda'
  }),
  notifications: z.boolean().default(true),
  emailNotifications: z.boolean().default(true),
  twoFactorEnabled: z.boolean().default(false),
  avatar: z.string().optional()
})

export type WelcomeFormData = z.infer<typeof welcomeSchema>