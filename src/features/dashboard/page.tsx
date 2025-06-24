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
import {
  DollarSign,
  LineChart,
  TrendingDown,
  TrendingUp,
  Download,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export function DashboardOverview() {
  const t = useTranslations('dashboard')

  // Dados das transações com chaves para tradução
  const transactionKeys = [
    {
      id: 1,
      descriptionKey: 'transactionTypes.salary',
      amount: 5000,
      type: 'income',
      categoryKey: 'categories.work',
      date: '2024-01-15'
    },
    {
      id: 2,
      descriptionKey: 'transactionTypes.supermarket',
      amount: -250,
      type: 'expense',
      categoryKey: 'categories.food',
      date: '2024-01-14'
    },
    {
      id: 3,
      descriptionKey: 'transactionTypes.freelance',
      amount: 800,
      type: 'income',
      categoryKey: 'categories.work',
      date: '2024-01-13'
    },
    {
      id: 4,
      descriptionKey: 'transactionTypes.electricBill',
      amount: -120,
      type: 'expense',
      categoryKey: 'categories.utilities',
      date: '2024-01-12'
    },
    {
      id: 5,
      descriptionKey: 'transactionTypes.investment',
      amount: -1000,
      type: 'investment',
      categoryKey: 'categories.savings',
      date: '2024-01-11'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">
            {t('welcome', { name: 'Jean VIADO' })}
          </h1>
          <p className="text-muted-foreground">{t('welcomeSubtitle')}</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            {t('export')}
          </Button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t('totalBalance')}
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ 23.450,00
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span>{' '}
              {t('comparedToLastMonth')}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('income')}</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ 5.800,00</div>
            <p className="text-xs text-muted-foreground">{t('thisMonth')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t('expenses')}
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">R$ 2.370,00</div>
            <p className="text-xs text-muted-foreground">{t('thisMonth')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t('investments')}
            </CardTitle>
            <LineChart className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">R$ 15.200,00</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.2%</span> {t('yield')}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Overview Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>{t('recentTransactions')}</CardTitle>
            <CardDescription>
              {t('recentTransactionsDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactionKeys.slice(0, 5).map(transaction => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        transaction.type === 'income'
                          ? 'bg-green-100 text-green-600'
                          : transaction.type === 'expense'
                          ? 'bg-red-100 text-red-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {transaction.type === 'income' ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : transaction.type === 'expense' ? (
                        <ArrowDownRight className="w-4 h-4" />
                      ) : (
                        <LineChart className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">
                        {t(transaction.descriptionKey)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t(transaction.categoryKey)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-medium ${
                        transaction.amount > 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {transaction.amount > 0 ? '+' : ''}R${' '}
                      {Math.abs(transaction.amount).toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Spending by Category */}
        <Card>
          <CardHeader>
            <CardTitle>{t('spendingByCategory')}</CardTitle>
            <CardDescription>
              {t('spendingByCategoryDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">{t('categories.food')}</span>
                </div>
                <span className="text-sm font-medium">R$ 850</span>
              </div>
              <Progress value={35} className="h-2" />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">{t('categories.transport')}</span>
                </div>
                <span className="text-sm font-medium">R$ 420</span>
              </div>
              <Progress value={20} className="h-2" />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">
                    {t('categories.entertainment')}
                  </span>
                </div>
                <span className="text-sm font-medium">R$ 320</span>
              </div>
              <Progress value={15} className="h-2" />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">{t('categories.utilities')}</span>
                </div>
                <span className="text-sm font-medium">R$ 280</span>
              </div>
              <Progress value={12} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
