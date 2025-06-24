'use client'

import React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Upload,
  User,
  Settings,
  Shield,
  Bell
} from 'lucide-react'

interface UserData {
  initialBalance: string
  theme: string
  language: string
  currency: string
  notifications: boolean
  emailNotifications: boolean
  twoFactorEnabled: boolean
  avatar: string
}

const steps = [
  {
    id: 1,
    title: 'Configurações Básicas',
    description: 'Configure suas preferências iniciais',
    icon: Settings
  },
  {
    id: 2,
    title: 'Notificações',
    description: 'Personalize suas notificações',
    icon: Bell
  },
  {
    id: 3,
    title: 'Segurança',
    description: 'Configure a segurança da sua conta',
    icon: Shield
  },
  {
    id: 4,
    title: 'Perfil',
    description: 'Adicione sua foto de perfil',
    icon: User
  }
]

export default function WelcomeScreen() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState<UserData>({
    initialBalance: '',
    theme: '',
    language: '',
    currency: '',
    notifications: true,
    emailNotifications: true,
    twoFactorEnabled: false,
    avatar: ''
  })

  const updateUserData = (field: keyof UserData, value: any) => {
    setUserData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFinish = () => {
    console.log('Dados do usuário:', userData)
    // Aqui você pode enviar os dados para o servidor
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="balance">Saldo Inicial</Label>
              <Input
                id="balance"
                type="number"
                placeholder="0.00"
                value={userData.initialBalance}
                onChange={e => updateUserData('initialBalance', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="theme">Tema</Label>
              <Select
                value={userData.theme}
                onValueChange={value => updateUserData('theme', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um tema" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Claro</SelectItem>
                  <SelectItem value="dark">Escuro</SelectItem>
                  <SelectItem value="system">Sistema</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Idioma</Label>
              <Select
                value={userData.language}
                onValueChange={value => updateUserData('language', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um idioma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                  <SelectItem value="en-US">English (US)</SelectItem>
                  <SelectItem value="es-ES">Español</SelectItem>
                  <SelectItem value="fr-FR">Français</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currency">Moeda</Label>
              <Select
                value={userData.currency}
                onValueChange={value => updateUserData('currency', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma moeda" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BRL">Real (R$)</SelectItem>
                  <SelectItem value="USD">Dólar ($)</SelectItem>
                  <SelectItem value="EUR">Euro (€)</SelectItem>
                  <SelectItem value="GBP">Libra (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Notificações Push</Label>
                <p className="text-sm text-muted-foreground">
                  Receba notificações no seu dispositivo
                </p>
              </div>
              <Switch
                id="notifications"
                checked={userData.notifications}
                onCheckedChange={checked =>
                  updateUserData('notifications', checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">
                  Notificações por Email
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receba atualizações importantes por email
                </p>
              </div>
              <Switch
                id="email-notifications"
                checked={userData.emailNotifications}
                onCheckedChange={checked =>
                  updateUserData('emailNotifications', checked)
                }
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="two-factor">Autenticação de Dois Fatores</Label>
                <p className="text-sm text-muted-foreground">
                  Adicione uma camada extra de segurança à sua conta
                </p>
              </div>
              <Switch
                id="two-factor"
                checked={userData.twoFactorEnabled}
                onCheckedChange={checked =>
                  updateUserData('twoFactorEnabled', checked)
                }
              />
            </div>

            {userData.twoFactorEnabled && (
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  A autenticação de dois fatores será configurada após o
                  cadastro inicial.
                </p>
              </div>
            )}
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={userData.avatar || '/placeholder.svg'} />
                <AvatarFallback>
                  <User className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>

              <Button variant="outline" className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                Fazer Upload da Foto
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Adicione uma foto de perfil para personalizar sua conta
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bem-vindo! 👋
          </h1>
          <p className="text-muted-foreground">
            Vamos configurar sua conta em alguns passos simples
          </p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = currentStep === step.id
            const isCompleted = currentStep > step.id

            return (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                      isCompleted
                        ? 'bg-foreground border-foreground text-background'
                        : isActive
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'bg-background border-border text-muted-foreground'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p
                      className={`text-sm font-medium ${
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 ${
                      currentStep > step.id ? 'bg-foreground' : 'bg-border'
                    }`}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Content Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {React.createElement(steps[currentStep - 1].icon, {
                className: 'w-5 h-5'
              })}
              {steps[currentStep - 1].title}
            </CardTitle>
            <CardDescription>
              {steps[currentStep - 1].description}
            </CardDescription>
          </CardHeader>
          <CardContent>{renderStepContent()}</CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {currentStep} de {steps.length}
            </Badge>
          </div>

          {currentStep === steps.length ? (
            <Button onClick={handleFinish}>
              Finalizar
              <Check className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={nextStep}>
              Próximo
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
