import { useState, useRef, useEffect } from "react";
import { FaPlus, FaEllipsisH, FaEdit, FaTrash } from "react-icons/fa";
import customersData from "../data/CustomerData.json";

// Komponen kustom
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Card from "../components/Card";
import Badge from "../components/Badge";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

// Komponen shadcn/ui
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Customers() {
  const [customers, setCustomers] = useState(customersData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    customerId: "",
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const inputIdRef = useRef(null);

  useEffect(() => {
    if (isModalOpen && inputIdRef.current) {
      inputIdRef.current.focus();
    }
  }, [isModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomers([formData, ...customers]);
    setIsModalOpen(false);
    setFormData({
      customerId: "",
      customerName: "",
      email: "",
      phone: "",
      loyalty: "Bronze",
    });
  };

  // Helper warna loyalty badge
  const getLoyaltyBadgeType = (loyalty) => {
    if (loyalty === "Gold") return "gold";
    if (loyalty === "Silver") return "silver";
    return "bronze";
  };

  const tableHeaders = [
    "Customer ID",
    "Customer Name",
    "Email",
    "Phone",
    "Loyalty",
    "Action",
  ];

  return (
    <div className="flex flex-col font-inter">
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customer List"]}>
        <Button onClick={() => setIsModalOpen(true)} icon={<FaPlus />}>
          Add Customer
        </Button>
      </PageHeader>

      <Card className="mt-4 p-2">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow>
              {tableHeaders.map((header, idx) => (
                <TableHead key={idx} className="font-semibold text-gray-500">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((cust, idx) => (
              <TableRow key={idx} className="hover:bg-gray-50 transition-colors border-b border-gray-50">
                <TableCell className="font-medium text-gray-500">
                  {cust.customerId}
                </TableCell>
                <TableCell className="font-semibold text-gray-800">
                  {cust.customerName}
                </TableCell>
                <TableCell className="text-gray-500">{cust.email}</TableCell>
                <TableCell className="text-gray-500">{cust.phone}</TableCell>
                <TableCell>
                  <Badge type={getLoyaltyBadgeType(cust.loyalty)}>
                    {cust.loyalty}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors outline-none">
                      <FaEllipsisH />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white rounded-xl shadow-lg border-gray-100 p-1 min-w-[150px]">
                      <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 text-gray-700 flex items-center gap-2 p-2 rounded-lg outline-none">
                        <FaEdit className="text-blue-500" /> Edit Customer
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer hover:bg-red-50 text-red-600 flex items-center gap-2 p-2 rounded-lg outline-none">
                        <FaTrash /> Delete Record
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Modal Form dengan auto-focus */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-white rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
              Add New Customer
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Customer ID"
              name="customerId"
              value={formData.customerId}
              onChange={handleInputChange}
              placeholder="CUST-9999"
              ref={inputIdRef}  
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
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              required
            />
            <InputField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+62..."
              required
            />
            <SelectField
              label="Loyalty Tier"
              name="loyalty"
              value={formData.loyalty}
              onChange={handleInputChange}
              options={[
                { label: "Bronze", value: "Bronze" },
                { label: "Silver", value: "Silver" },
                { label: "Gold", value: "Gold" },
              ]}
            />
            <div className="pt-4 flex justify-end gap-2">
              <Button
                type="outline"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button type="primary" onClick={handleSubmit}>
                Save Customer
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}