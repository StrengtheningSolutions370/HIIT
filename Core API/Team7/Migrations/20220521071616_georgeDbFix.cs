using Microsoft.EntityFrameworkCore.Migrations;

namespace Team7.Migrations
{
    public partial class georgeDbFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employee_User_UserID1",
                table: "Employee");

            migrationBuilder.DropForeignKey(
                name: "FK_PermissionUserRole_UserRole_UserRoleID",
                table: "PermissionUserRole");

            migrationBuilder.DropForeignKey(
                name: "FK_User_UserRole_UserRoleID",
                table: "User");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserRole",
                table: "UserRole");

            migrationBuilder.RenameTable(
                name: "UserRole",
                newName: "UserRoles");

            migrationBuilder.AlterColumn<int>(
                name: "UserID1",
                table: "Employee",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserRoles",
                table: "UserRoles",
                column: "UserRoleID");

            migrationBuilder.AddForeignKey(
                name: "FK_Employee_User_UserID1",
                table: "Employee",
                column: "UserID1",
                principalTable: "User",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PermissionUserRole_UserRoles_UserRoleID",
                table: "PermissionUserRole",
                column: "UserRoleID",
                principalTable: "UserRoles",
                principalColumn: "UserRoleID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_User_UserRoles_UserRoleID",
                table: "User",
                column: "UserRoleID",
                principalTable: "UserRoles",
                principalColumn: "UserRoleID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employee_User_UserID1",
                table: "Employee");

            migrationBuilder.DropForeignKey(
                name: "FK_PermissionUserRole_UserRoles_UserRoleID",
                table: "PermissionUserRole");

            migrationBuilder.DropForeignKey(
                name: "FK_User_UserRoles_UserRoleID",
                table: "User");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserRoles",
                table: "UserRoles");

            migrationBuilder.RenameTable(
                name: "UserRoles",
                newName: "UserRole");

            migrationBuilder.AlterColumn<int>(
                name: "UserID1",
                table: "Employee",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserRole",
                table: "UserRole",
                column: "UserRoleID");

            migrationBuilder.AddForeignKey(
                name: "FK_Employee_User_UserID1",
                table: "Employee",
                column: "UserID1",
                principalTable: "User",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PermissionUserRole_UserRole_UserRoleID",
                table: "PermissionUserRole",
                column: "UserRoleID",
                principalTable: "UserRole",
                principalColumn: "UserRoleID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_User_UserRole_UserRoleID",
                table: "User",
                column: "UserRoleID",
                principalTable: "UserRole",
                principalColumn: "UserRoleID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
