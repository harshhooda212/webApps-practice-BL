enum Role{
    admin,
    user,
    guest,
}
function assignrole(role: Role){
    if(role === Role.admin){
        console.log("You have admin privileges.");  
    }

}
assignrole(Role.admin); // Output: You have admin privileges.