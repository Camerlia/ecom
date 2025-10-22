// app/cart/page.tsx
import { Suspense } from 'react'
import CartContent from './CartContent'

export default function CartPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const step = searchParams.step || '1'
  const activeStep = parseInt(Array.isArray(step) ? step[0] : step)

  return (
    <Suspense fallback={<CartLoading />}>
      <CartContent initialStep={activeStep} />
    </Suspense>
  )
}

function CartLoading() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center my-12">
      <h1 className="text-2xl font-medium">Shopping Cart</h1>
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  )
}