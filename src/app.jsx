import './app.css'
import { HeaderComponent } from './Utils/Header/Header'
import { LandingPageComponent } from './Utils/LandingPage/LandingPage'
import { ElevateManagementComponent } from './Utils/VedioManagement/VedioElevate'
import { ElevateEngageComp } from './Utils/VedioEngagement/VedioEngage'

export function App() {

  return (
    <>
      <HeaderComponent/>
      <LandingPageComponent/>
      <ElevateManagementComponent/>
      <ElevateEngageComp/>
    </>
  )
}
