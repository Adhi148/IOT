
import './App.css'

function App() {

  const dashboardUrl = 'https://cloud.kaaiot.com/wd-public/cqph4ham6fhc73cmk4l0/dashboards/10c12a0e-66e7-4e99-9577-489be6327e03/6fed52c8-cb8b-4259-b40f-3e68607c1d88?public_id=48b47ded-a66a-49c9-904b-a45e9010c3ea';

  return (
    <>
      <div style={{ width: '100%', height: '100vh' }}>
        <iframe
          src={dashboardUrl}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Kaa IoT Dashboard"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}

export default App
