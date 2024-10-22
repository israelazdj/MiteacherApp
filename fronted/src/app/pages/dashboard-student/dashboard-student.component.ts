import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-student',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './dashboard-student.component.html',
  styleUrl: './dashboard-student.component.css'
})
export class DashboardStudentComponent {

}
