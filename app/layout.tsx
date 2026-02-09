import type { Metadata } from 'next';
import { CartProvider } from '@/context/CartContext';
import MUIProvider from '@/components/MUIProvider';
import { ToastContainer } from 'react-toastify';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'eha.eco - Earth Friendly Products',
  description: 'Sustainable, earth-friendly products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MUIProvider>
          <CartProvider>
            {children}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </CartProvider>
        </MUIProvider>
      </body>
    </html>
  );
}
