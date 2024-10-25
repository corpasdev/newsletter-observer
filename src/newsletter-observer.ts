interface Observable {
    attach(o: Observer): void;
    detach(o: Observer): void;
    notify(): void;
  }
  
interface Observer {
    update(content: string): void;
}
  
export class Newsletter implements Observable {
    private subscribers: Observer[] = [];
    private lastEdition: string = '';
  
    attach(subscriber: Observer) {
      this.subscribers.push(subscriber);
    }
  
    detach(subscriber: Observer) {
      // Eliminar suscriptor
      this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }
  
    publishNewEdition(content: string) {
      this.lastEdition = content;
      this.notify();
      console.log('Nueva edición del boletín publicada:', content);
    }
  
    notify() {
      for (let subscriber of this.subscribers) {
        subscriber.update(this.lastEdition);
      }
    }
  }
  
export class NewsletterSubscriber implements Observer {
    private observable: Newsletter;
  
    constructor(observable: Newsletter) {
      this.observable = observable;
    }
  
    update(content: string) {
      console.log('¡Nueva edición del boletín recibida!');
      console.log('Contenido:', content);
    }
  }
  
