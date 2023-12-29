import fs from 'fs/promises';
// Interfaces
interface Product {
  name: string;
  price: number;
}

interface Order {
  id: string;
  products: Product[];
  total: number;
}

interface INotificationService {
  sendNotification(message: string): void;
}
interface IProductService {
  getAllProducts(): Product[];
}
interface IOrderService {
  createOrder(products: Product[]): Order;
}

// Low level modules
class ProductService implements IProductService {
  getAllProducts(): Product[] {
    return [{ name: 'Laptop', price: 10 }];
  }
}
class OrderService implements IOrderService {
  constructor(
    private productService: IProductService,
    private notificationService: INotificationService
  ) {}

  createOrder(products: Product[]): Order {
    const total = this.calculateTotal(products);
    const order: Order = {
      id: '123',
      products,
      total,
    };

    this.notificationService.sendNotification('New order created!');

    return order;
  }
  private calculateTotal(products: Product[]): number {
    // Calculate total based on product prices
    return products.reduce((acc, product) => acc + product.price, 0);
  }
}

class NotificationService implements INotificationService {
  sendNotification(message: string): void {
    console.log(`Notified ${message}`);
  }
}
class FileBasedNotification implements INotificationService {
  sendNotification(message: string): void {
    fs.writeFile('notification.txt', message, 'utf-8');
  }
}

function dipExecute() {
  const productService = new ProductService();
  const notificationService = new NotificationService();
  const fileBasedNotification = new FileBasedNotification();
  const orderService = new OrderService(productService, fileBasedNotification);
  orderService.createOrder([{ name: 'Laptop', price: 10 }]);
}

export default dipExecute;
