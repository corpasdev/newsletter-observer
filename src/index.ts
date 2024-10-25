
import { Newsletter, NewsletterSubscriber } from './newsletter-observer';

// Ejemplo de uso:
let newsletter = new Newsletter();
let subscriber1 = new NewsletterSubscriber(newsletter);
let subscriber2 = new NewsletterSubscriber(newsletter);
  
newsletter.attach(subscriber1);
newsletter.attach(subscriber2);
  
newsletter.publishNewEdition('¡Las últimas noticias y actualizaciones en nuestro boletín!');
  