import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "suga cart.com - Admin",
    description: "suga cart.com - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
