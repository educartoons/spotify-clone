import Button from './Button'

export default function LoginPage() {
  const handleLogin = () => {
    const REDIRECT_URI = 'http://localhost:5173/callback'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'
    const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID

    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private%20user-read-email`
  }

  return (
    <div>
      <Button onClick={handleLogin} variant="solid">
        Login with Spotify
      </Button>
    </div>
  )
}
