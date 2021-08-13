    export class User {
        id?:                      number;
        firstName:               string;
        lastName:                string;
        sex:                     string;
        email:                   string;
        address:                 string;
        cin:                     number;
        password:                string;
        birthday:                Date;
        driverLicence?:           number;
        phoneNumber:             string;
        totalOrder?:              number;
        isAccountNonExpired:     boolean;
        isAccountNonLocked:      boolean;
        isCredentialsNonExpired: boolean;
        isEnabled:               boolean;
        // role:                    Role;
}
export interface Update_User {
    firstName:               string;
    lastName:                string;
    password:                string;
    phoneNumber:             string;
    address:                 string;
    email:                   string;
    cin:                     number;



    
 }
 export interface Create_User{
    firstName:               string;
    lastName:                string;
    email:                   string;
    password:                string;


 }