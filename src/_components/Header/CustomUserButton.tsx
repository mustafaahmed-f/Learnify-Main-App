"use client";
import { userRoles } from "@/_utils/constants/userRoles";
import { UserButton, useUser } from "@clerk/nextjs";
import { GraduationCap, LayoutDashboard, Radio } from "lucide-react";

function CustomUserButton() {
  const { user } = useUser();
  const Role = user?.publicMetadata.role;
  const isAdmin = Role === userRoles.admin;
  const isInstructor = Role === userRoles.instructor;

  return (
    <UserButton>
      <UserButton.MenuItems>
        {/* //* For admins */}
        {isAdmin && (
          <UserButton.Link
            href="#"
            label="Admin Dashboard"
            labelIcon={<LayoutDashboard size={22} />}
          />
        )}
        {/* //* For instructors */}
        {isInstructor && (
          <UserButton.Link
            href="#"
            label="Courses Dashboard"
            labelIcon={<GraduationCap size={22} />}
          />
        )}
        {/* //* For all users */}
        <UserButton.Link label="Live Classes" labelIcon={<Radio />} href="#" />
      </UserButton.MenuItems>
    </UserButton>
  );
}

export default CustomUserButton;
