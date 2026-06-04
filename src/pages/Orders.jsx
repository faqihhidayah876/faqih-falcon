import { useState } from "react";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import ordersData from "../data/OrderData.json";

// Import Komponen Kustom
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Card from "../components/Card";
import Badge from "../components/Badge";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

// Import Komponen SHADCN UI
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ orderId: "", customerName: "", status: "Pending", totalPrice: "", orderDate: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrders([formData, ...orders]);
    setIsModalOpen(false); 
    setFormData({ orderId: "", customerName: "", status: "Pending", totalPrice: "", orderDate: "" });
  };

  // Helper untuk menentukan warna Badge status
  const getStatusBadgeType = (status) => {
    if (status === 'Completed') return 'success'; // Hijau
    if (status === 'Pending') return 'pending';   // Kuning/Amber
    return 'danger';                              // Merah (Cancelled)
  };

  return (
    <div className="flex flex-col font-inter">
      {/* 1. Header Menggunakan PageHeader */}
      <PageHeader title="Orders Directory" breadcrumb={["Dashboard", "Order List"]}>
        <Button onClick={() => setIsModalOpen(true)} icon={<FaPlus />}>
          Add Order
        </Button>
      </PageHeader>

      {/* 2. Tabel Menggunakan Shadcn UI */}
      <Card className="mt-4 p-2">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow>
              <TableHead className="font-semibold text-gray-500">Order ID</TableHead>
              <TableHead className="font-semibold text-gray-500">Customer Name</TableHead>
              <TableHead className="font-semibold text-gray-500">Status</TableHead>
              <TableHead className="font-semibold text-gray-500">Total Price</TableHead>
              <TableHead className="font-semibold text-gray-500">Order Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, idx) => (
              <TableRow key={idx} className="hover:bg-gray-50 transition-colors border-b border-gray-50">
                <TableCell className="font-semibold text-gray-800 flex items-center gap-3 py-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                    <FaShoppingCart />
                  </div>
                  {order.orderId}
                </TableCell>
                <TableCell className="font-medium text-gray-500">{order.customerName}</TableCell>
                <TableCell>
                  <Badge type={getStatusBadgeType(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-500 font-medium">{order.totalPrice}</TableCell>
                <TableCell className="text-gray-500">{order.orderDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* 3. Modal Form Menggunakan Shadcn Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-white rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
              Add New Order
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField 
              label="Order ID" 
              name="orderId" 
              value={formData.orderId} 
              onChange={handleInputChange} 
              placeholder="ORD-9999" 
              required 
            />
            <InputField 
              label="Customer Name" 
              name="customerName" 
              value={formData.customerName} 
              onChange={handleInputChange} 
              placeholder="John Doe" 
              required 
            />
            <InputField 
              label="Total Price" 
              name="totalPrice" 
              value={formData.totalPrice} 
              onChange={handleInputChange} 
              placeholder="Rp 500.000" 
              required 
            />
            <InputField 
              type="date"
              label="Order Date" 
              name="orderDate" 
              value={formData.orderDate} 
              onChange={handleInputChange} 
              required 
            />
            <SelectField 
              label="Status" 
              name="status" 
              value={formData.status} 
              onChange={handleInputChange}
              options={[
                { label: "Pending", value: "Pending" },
                { label: "Completed", value: "Completed" },
                { label: "Cancelled", value: "Cancelled" }
              ]}
            />
            
            <div className="pt-4 flex justify-end gap-2">
              <Button type="outline" onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(false);
              }}>
                Cancel
              </Button>
              <Button type="primary" onClick={handleSubmit}>
                Save Order
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}