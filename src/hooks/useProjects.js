import { useEffect, useState } from 'react'

const initialState = { status: 'loading', projects: [] }

export default function useProjects() {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    let active = true

    import('../data/projects.json')
      .then(({ default: projects }) => {
        if (active) {
          setState({
            status: Array.isArray(projects) && projects.length > 0 ? 'success' : 'empty',
            projects: Array.isArray(projects) ? projects : [],
          })
        }
      })
      .catch(() => {
        if (active) setState({ status: 'error', projects: [] })
      })

    return () => {
      active = false
    }
  }, [])

  return state
}
