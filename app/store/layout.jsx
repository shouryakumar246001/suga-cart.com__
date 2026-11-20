import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "suga cart.com - Store Dashboard",
    description: "suga cart.com - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
