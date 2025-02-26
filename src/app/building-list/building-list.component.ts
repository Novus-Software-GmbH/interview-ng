import {Component, OnInit} from '@angular/core';
import {Building} from "../../model";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {NgIf} from "@angular/common";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-building-list',
  standalone: true,
  imports: [
    MatProgressSpinner,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    NgIf,
    MatSort
  ],
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.scss'
})
export class BuildingListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'buildingYear', 'address'];

  buildingList: Building[] = [];
  loaded = false;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient
      .get<Building[]>("http://localhost:3000/api/building")
      .subscribe(buildings => this.setBuildings(buildings));
  }

  public setBuildings(buildings: Building[]) {
    this.buildingList = buildings;
    this.loaded = true;
  }
}
