import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /dashboard/projects!'
}
