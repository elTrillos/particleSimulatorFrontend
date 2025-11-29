import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SocketService {
  private socket!: Socket;

  connect() {
    this.socket = io('http://localhost:5000');
  }

  listenPositions(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('positions', (data: any) => observer.next(data));
    });
  }

  disconnect() {
    if (this.socket) this.socket.disconnect();
  }
}
