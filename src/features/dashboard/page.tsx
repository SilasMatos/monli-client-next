'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  LineChart,
  TrendingDown,
  TrendingUp,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Calendar,
  PiggyBank,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Clock,
  Wallet
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export function DashboardOverview() {
  const t = useTranslations('dashboard')

  // Dados simulados para o dashboard
  const currentMonth = new Date().toLocaleString('pt-BR', {
    month: 'long',
    year: 'numeric'
  })
  const totalBalance = 23450.0
  const monthlyBalance = 3430.0
  const monthlyIncome = 5800.0
  const monthlyExpenses = 2370.0
  const investments = 15200.0
  const savingsGoal = 10000.0
  const currentSavings = 7500.0

  const monthlyTransactions = [
    {
      id: 1,
      description: 'Salário',
      amount: 5000,
      type: 'income',
      category: 'Trabalho',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      description: 'Supermercado Extra',
      amount: -250,
      type: 'expense',
      category: 'Alimentação',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      description: 'Freelance Design',
      amount: 800,
      type: 'income',
      category: 'Trabalho',
      date: '2024-01-13',
      status: 'completed'
    },
    {
      id: 4,
      description: 'Conta de Luz',
      amount: -120,
      type: 'expense',
      category: 'Utilidades',
      date: '2024-01-12',
      status: 'completed'
    },
    {
      id: 5,
      description: 'Investimento CDB',
      amount: -1000,
      type: 'investment',
      category: 'Investimentos',
      date: '2024-01-11',
      status: 'completed'
    },
    {
      id: 6,
      description: 'Restaurante',
      amount: -85,
      type: 'expense',
      category: 'Alimentação',
      date: '2024-01-10',
      status: 'completed'
    },
    {
      id: 7,
      description: 'Uber',
      amount: -25,
      type: 'expense',
      category: 'Transporte',
      date: '2024-01-09',
      status: 'completed'
    },
    {
      id: 8,
      description: 'Transferência PIX',
      amount: -200,
      type: 'expense',
      category: 'Transferência',
      date: '2024-01-08',
      status: 'pending'
    }
  ]

  const categorySpending = [
    { name: 'Alimentação', amount: 850, percentage: 35, color: 'bg-blue-500' },
    { name: 'Transporte', amount: 420, percentage: 20, color: 'bg-green-500' },
    {
      name: 'Entretenimento',
      amount: 320,
      percentage: 15,
      color: 'bg-purple-500'
    },
    { name: 'Utilidades', amount: 280, percentage: 12, color: 'bg-orange-500' },
    { name: 'Saúde', amount: 180, percentage: 8, color: 'bg-red-500' },
    { name: 'Outros', amount: 150, percentage: 10, color: 'bg-gray-500' }
  ]

  const savingsProgress = (currentSavings / savingsGoal) * 100

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Olá, Neymar! 👋</h1>
          <p className="text-muted-foreground">
            Aqui está o resumo das suas finanças em {currentMonth}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Main Balance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Saldo Total da Conta
            </CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R${' '}
              {totalBalance.toLocaleString('pt-BR', {
                minimumFractionDigits: 2
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> em relação ao mês
              passado
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Saldo do Mês Atual
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              R${' '}
              {monthlyBalance.toLocaleString('pt-BR', {
                minimumFractionDigits: 2
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              Receitas - Despesas em {currentMonth.split(' ')[0]}
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Receitas do Mês
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">
              R${' '}
              {monthlyIncome.toLocaleString('pt-BR', {
                minimumFractionDigits: 2
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-600">+5.2%</span> vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Despesas do Mês
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              R${' '}
              {monthlyExpenses.toLocaleString('pt-BR', {
                minimumFractionDigits: 2
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+8.1%</span> vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Investimentos</CardTitle>
            <LineChart className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              R${' '}
              {investments.toLocaleString('pt-BR', {
                minimumFractionDigits: 2
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.2%</span> de rentabilidade
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Meta de Poupança
            </CardTitle>
            <Target className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              {savingsProgress.toFixed(0)}%
            </div>
            <Progress value={savingsProgress} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-1">
              R$ {currentSavings.toLocaleString('pt-BR')} de R${' '}
              {savingsGoal.toLocaleString('pt-BR')}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Poupança
            </CardTitle>
            <PiggyBank className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {((monthlyBalance / monthlyIncome) * 100).toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">Da sua renda mensal</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction History */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Histórico de Transações - {currentMonth}
            </CardTitle>
            <CardDescription>
              Todas as suas movimentações financeiras do mês atual
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monthlyTransactions.map(transaction => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {transaction.type === 'income' ? (
                          <ArrowUpRight className="h-4 w-4 text-green-600" />
                        ) : transaction.type === 'expense' ? (
                          <ArrowDownRight className="h-4 w-4 text-red-600" />
                        ) : (
                          <LineChart className="h-4 w-4 text-blue-600" />
                        )}
                        {transaction.description}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{transaction.category}</Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(transaction.date).toLocaleDateString('pt-BR')}
                    </TableCell>
                    <TableCell>
                      {transaction.status === 'completed' ? (
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Concluído
                        </Badge>
                      ) : (
                        <Badge
                          variant="secondary"
                          className="bg-yellow-100 text-yellow-800"
                        >
                          <Clock className="h-3 w-3 mr-1" />
                          Pendente
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`font-medium ${
                          transaction.amount > 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {transaction.amount > 0 ? '+' : ''}R${' '}
                        {Math.abs(transaction.amount).toLocaleString('pt-BR', {
                          minimumFractionDigits: 2
                        })}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Spending by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Gastos por Categoria</CardTitle>
            <CardDescription>
              Distribuição dos seus gastos em {currentMonth.split(' ')[0]}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categorySpending.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 ${category.color} rounded-full`}
                      ></div>
                      <span className="text-sm font-medium">
                        {category.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium">
                        R$ {category.amount.toLocaleString('pt-BR')}
                      </span>
                      <div className="text-xs text-muted-foreground">
                        {category.percentage}%
                      </div>
                    </div>
                  </div>
                  <Progress value={category.percentage} className="h-2" />
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <span className="text-amber-600 font-medium">Alerta:</span>
                <span className="text-muted-foreground">
                  Gastos com alimentação acima da média
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-green-600 font-medium">Parabéns:</span>
                <span className="text-muted-foreground">
                  Meta de transporte atingida
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Health Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Resumo da Saúde Financeira
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">Excelente</div>
              <div className="text-sm text-muted-foreground">
                Taxa de Poupança
              </div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">Boa</div>
              <div className="text-sm text-muted-foreground">
                Controle de Gastos
              </div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                Crescendo
              </div>
              <div className="text-sm text-muted-foreground">Investimentos</div>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <div className="text-2xl font-bold text-amber-600">Atenção</div>
              <div className="text-sm text-muted-foreground">
                Gastos Variáveis
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
