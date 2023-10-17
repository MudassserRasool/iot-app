import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './pages/login/login.component';
// import { RegistrationComponent } from './pages//registration/registration.component';
// import { ForgetComponent } from './pages/forget/forget.component';
 import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardlayoutComponent } from './dashboardlayout/dashboardlayout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { EquipmentEfficiencyComponent } from './pages/equipment-efficiency/equipment-efficiency.component';
import { FactorySummaryComponent } from './pages/factory-summary/factory-summary.component';
import { MaintenanceDetailsComponent } from './pages/maintenance-details/maintenance-details.component';
import { EnergyComponent } from './pages/energy/energy.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { AddNewFactoryFormComponent } from './pages/add-new-factory-form/add-new-factory-form.component';
import { AddNewGroupFormComponent } from './pages/add-new-group-form/add-new-group-form.component';
import { AddNewEquipmentComponent } from './pages/add-new-equipment/add-new-equipment.component';
import { AddNewToolsComponent } from './pages/add-new-tools/add-new-tools.component';
import { AddNewShiftComponent } from './pages/add-new-shift/add-new-shift.component';
import { AddNewProductFormComponent } from './pages/add-new-product-form/add-new-product-form.component';
import { AddNewOperatorFormComponent } from './pages/add-new-operator-form/add-new-operator-form.component';
import { AddNewRejectionReasonComponent } from './pages/add-new-rejection-reason/add-new-rejection-reason.component';
import { AddNewFactoryAreaFormComponent } from './pages/add-new-factory-area-form/add-new-factory-area-form.component';
import { AddNewJobFormComponent } from './pages/add-new-job-form/add-new-job-form.component';
const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'forget',
    component: ForgetComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'efficiency',
    component: EquipmentEfficiencyComponent,
  },
  {
    path: 'summery',
    component: FactorySummaryComponent,
  },
  {
    path: 'energy',
    component: EnergyComponent,
  },
  {
    path: 'maintenance-details',
    component: MaintenanceDetailsComponent,
  },
  {
    path: 'quipment',
    component: EquipmentComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent ,
  },
  {
    path: 'dashboard-layout',
    component: DashboardlayoutComponent ,
  },
  {
    path: 'add-new-factory',
    component: AddNewFactoryFormComponent ,
  },
  {
    path: 'add-new-group',
    component: AddNewGroupFormComponent ,
  },
  {
    path: 'add-new-equipment',
    component: AddNewEquipmentComponent ,
  },
  {
    path: 'add-new-shift',
    component: AddNewShiftComponent ,
  },
  {
    path: 'add-new-tools',
    component: AddNewToolsComponent ,
  },
  {
    path: 'add-new-product',
    component: AddNewProductFormComponent ,
  },
  {
    path: 'add-new-operator',
    component: AddNewOperatorFormComponent ,
  },
  {
    path: 'add-new-rejection-reason',
    component: AddNewRejectionReasonComponent ,
  },
  {
    path: 'add-new-factory-area',
    component: AddNewFactoryAreaFormComponent ,
  },
  {
    path: 'add-new-job',
    component: AddNewJobFormComponent ,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
