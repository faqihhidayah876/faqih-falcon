import { useState, useEffect } from "react";
import { authAPI } from "../services/authAPI";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import { ImSpinner2 } from "react-icons/im";

// Import Komponen SHADCN UI
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Mengambil data dari Supabase saat halaman pertama kali dimuat
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await authAPI.fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message || "Gagal mengambil data user");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="flex flex-col font-inter">
      <PageHeader title="Data User" breadcrumb={["Dashboard", "User Management"]} />

      <Card className="mt-4 p-2 min-h-[300px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 text-blue-600">
            <ImSpinner2 className="animate-spin text-4xl mb-4" />
            <p className="text-gray-500 font-medium">Memuat data user...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-64 text-red-500">
            <p className="font-medium bg-red-50 px-4 py-2 rounded-lg">{error}</p>
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow>
                <TableHead className="font-semibold text-gray-500">Full Name</TableHead>
                <TableHead className="font-semibold text-gray-500">Email Address</TableHead>
                <TableHead className="font-semibold text-gray-500">Role</TableHead>
                <TableHead className="font-semibold text-gray-500">Join Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, idx) => (
                <TableRow key={idx} className="hover:bg-gray-50 transition-colors border-b border-gray-50">
                  <TableCell className="font-semibold text-gray-800 flex items-center gap-3 py-4">
                    <Avatar name={user.full_name || "Unknown User"} />
                    {user.full_name || "N/A"}
                  </TableCell>
                  <TableCell className="text-gray-500">{user.email}</TableCell>
                  <TableCell>
                    {/* Badge biru untuk admin, hijau untuk user biasa */}
                    <Badge type={user.role === 'admin' ? 'info' : 'success'}>
                      {user.role ? user.role.toUpperCase() : 'USER'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-500 text-sm">
                    {/* Format tanggal agar lebih mudah dibaca */}
                    {new Date(user.created_at).toLocaleDateString('id-ID', {
                      day: 'numeric', month: 'short', year: 'numeric'
                    })}
                  </TableCell>
                </TableRow>
              ))}
              {users.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                    Belum ada user yang terdaftar.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
}