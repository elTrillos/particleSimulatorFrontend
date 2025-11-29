import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket!: Socket;

  connect(url: string): void {
    this.socket = io(url);
  }

  disconnect(): void {
    if (this.socket) this.socket.disconnect();
  }

  emit(event: string, data?: any): void {
    if (this.socket) this.socket.emit(event, data);
  }

  on<T>(event: string): Observable<T> {
    return new Observable<T>(observer => {
      this.socket.on(event, (data: T) => observer.next(data));
      console.log(`Subscribed to event: ${event}`);
      return () => this.socket.off(event);
    });
  }
}
