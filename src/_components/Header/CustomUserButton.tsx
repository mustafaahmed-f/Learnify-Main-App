"use client";
import { userRoles } from "@/_utils/constants/userRoles";
import { UserButton, useUser } from "@clerk/nextjs";
import { GraduationCap, LayoutDashboard, Radio, UserRound } from "lucide-react";

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
            labelIcon={<LayoutDashboard size={22} color="var(--warning)" />}
          />
        )}
        {/* //* For instructors */}
        {isInstructor && (
          <UserButton.Link
            href="#"
            label="Instructor Dashboard"
            labelIcon={<GraduationCap size={22} color="var(--success)" />}
          />
        )}
        {/* //* For non-instructors and non-admins */}
        <UserButton.Link
          href="#"
          label="Become an Instructor"
          labelIcon={<UserRound size={22} color="var(--destructive)" />}
        />
        {/* //* For all users */}
        <UserButton.Link
          label="Live Classes"
          labelIcon={<Radio size={22} color="var(--primary-500)" />}
          href="#"
        />
      </UserButton.MenuItems>
    </UserButton>
  );
}

export default CustomUserButton;
