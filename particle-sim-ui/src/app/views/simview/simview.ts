import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../services/websocket.service';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-simview',
  imports: [
    CommonModule, 
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './simview.html',
  styleUrl: './simview.css',
})
export class Simview implements OnInit, OnDestroy {
  rawMessage: string = ''; // Store the raw message as a string
  @ViewChild('canvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(private ws: WebsocketService) {}

  ngOnInit(): void {
    // Connect to backend
    this.ws.connect('http://localhost:5000');

    // Listen for "positions" messages
    this.ws.on<any>('positions').subscribe(data => {
      console.log('Received positions:', data);
      // Convert to pretty JSON string for display
      this.rawMessage = JSON.stringify(data, null, 2);
    });
  }

  ngAfterViewInit() {
    const ctx = this.canvasRef.nativeElement.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'white';
      ctx.fillText('Simulation Canvas Ready', 300, 400);
    }
  }

  ngOnDestroy(): void {
    this.ws.disconnect();
  }
}
