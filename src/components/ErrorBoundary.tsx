import { Component, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
  }

  componentDidCatch(error: Error): void {
    if (error) {
      this.setState({
        ...this.state,
        hasError: true,
      })
    }
  }

  render(): ReactNode {
    const { hasError } = this.state
    if (hasError) {
      return <div className="text-white text-3xl p-6">Encontramos un error</div>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary
