import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EquipmentEfficiencyComponent } from './pages/equipment-efficiency/equipment-efficiency.component';
// import { ReuseableEquipmentEfficiencyComponent } from './components/reuseable-equipment-efficiency/reuseable-equipment-efficiency.component';
import { EquipmentEfficiencyOverviewCardComponent } from './components/equipment-efficiency-overview-card/equipment-efficiency-overview-card.component';
import { EquipmentEfficiencyDetailCardComponent } from './components/equipment-efficiency-detail-card/equipment-efficiency-detail-card.component';
// import { NgxPasswordStrengthModule } from 'ngx-password-strength';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FactorySummaryComponent } from './pages/factory-summary/factory-summary.component';
import { SelectMonthComponent } from './components/select-month/select-month.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaugeGraphCardComponent } from './components/gauge-graph-card/gauge-graph-card.component';
import { ChartType } from 'chart.js';

import { NgxGaugeModule } from 'ngx-gauge';

// import { NgxChartsModule }from '@swimlane/ngx-charts';  // added
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { EnergyComponent } from './pages/energy/energy.component';
import { EnergyCostOverviewCardComponent } from './components/energy-cost-overview-card/energy-cost-overview-card.component';
import { EnergyCostDetailsCardComponent } from './components/energy-cost-details-card/energy-cost-details-card.component';
import { MaintenanceDetailsComponent } from './pages/maintenance-details/maintenance-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { EquipmentEfficiencyOvenCardComponent } from './components/equipment-efficiency-oven-card/equipment-efficiency-oven-card.component';
import { SpeedAndAvailabilityComponent } from './components/speed-and-availability/speed-and-availability.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { ReuseableFormAddButtonComponent } from './components/reuseable-form-add-button/reuseable-form-add-button.component';
import { ReuseableFormCancelButtonComponent } from './components/reuseable-form-cancel-button/reuseable-form-cancel-button.component';
import { AddNewFactoryFormComponent } from './pages/add-new-factory-form/add-new-factory-form.component';
import { AddNewGroupFormComponent } from './pages/add-new-group-form/add-new-group-form.component';
import { AddNewEquipmentComponent } from './pages/add-new-equipment/add-new-equipment.component';
import { AddNewToolsComponent } from './pages/add-new-tools/add-new-tools.component';
import { AddNewShiftComponent } from './pages/add-new-shift/add-new-shift.component';
import { AddNewRejectionReasonComponent } from './pages/add-new-rejection-reason/add-new-rejection-reason.component';
import { AddNewFactoryAreaFormComponent } from './pages/add-new-factory-area-form/add-new-factory-area-form.component';
import { AddNewOperatorFormComponent } from './pages/add-new-operator-form/add-new-operator-form.component';
import { AddNewProductFormComponent } from './pages/add-new-product-form/add-new-product-form.component';
import { AddNewJobFormComponent } from './pages/add-new-job-form/add-new-job-form.component';
import { MachineInfoSimpleCardComponent } from './components/machine-info-simple-card/machine-info-simple-card.component';
import { JobCircleCardComponent } from './components/job-circle-card/job-circle-card.component';
// import { NgApexchartsModule } from 'ng-apexcharts';


// import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetComponent,
    DashboardComponent,
    EquipmentEfficiencyComponent,
    // ReuseableEquipmentEfficiencyComponent,
    EquipmentEfficiencyOverviewCardComponent,
    EquipmentEfficiencyDetailCardComponent,
    FactorySummaryComponent,
    SelectMonthComponent,
    GaugeGraphCardComponent,
    EnergyComponent,
    EnergyCostOverviewCardComponent,
    EnergyCostDetailsCardComponent,
    MaintenanceDetailsComponent,
    EquipmentEfficiencyOvenCardComponent,
    SpeedAndAvailabilityComponent,
    EquipmentComponent,
    SimpleCardComponent,
    ReuseableFormAddButtonComponent,
    ReuseableFormCancelButtonComponent,
    AddNewFactoryFormComponent,
    AddNewGroupFormComponent,
    AddNewEquipmentComponent,
    AddNewToolsComponent,
    AddNewShiftComponent,
    AddNewRejectionReasonComponent,
    AddNewFactoryAreaFormComponent,
    AddNewOperatorFormComponent,
    AddNewProductFormComponent,
    AddNewJobFormComponent,
    MachineInfoSimpleCardComponent,
    JobCircleCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    NgxGaugeModule,
    FusionChartsModule,
    MatTableModule,
    MatSortModule,

    // NgApexchartsModule,
    // NgxChartsModule,
    // NgChartsModule

    // EchartsxModule,
    // NgxIntlTelInputModule,
    // NgxPasswordStrengthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
