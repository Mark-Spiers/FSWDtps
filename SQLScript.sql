drop database if exists Company;

create database Company;

drop user if exists dev@localhost;
create user dev@localhost identified with mysql_native_password by 'dev-Pwd!';
grant all on Company.* to dev@localhost;

USE Company;


Drop table if exists Employee;
Drop table if exists Department;
Drop table if exists Employee_Department;

Create table Employee (
  EmployeeID int primary key Auto_increment,
  EmployeeName varchar(50) not null,
  Address varchar(100),
  NIN varchar(9) unique not null,
  IBAN varchar(22) unique not null,
  BIC varchar(8) not null,
  Salary decimal(11,2) unsigned
);
-- ALTER TABLE CONSTRAINTS FOR EMPLOYEE --
/**
ALTER TABLE Employee ADD CONSTRAINT Employee_NIN_chk 
CHECK (REGEXP_LIKE(NIN,'[a-z&&[^dfiquvo]]{2}[0-9]{6}[abcdfmp]'));
ALTER TABLE Employee ADD CONSTRAINT Employee_IBAN_chk 
CHECK (REGEXP_LIKE(IBAN,'[a-z]{2}+[0-9]{2}+[a-z]{4}+[0-9]{14}+'));
ALTER TABLE Employee ADD CONSTRAINT Employee_BIC_chk 
CHECK (REGEXP_LIKE(BIC,'[a-z]{6}+[0-9][0-9a-z]+'));
ALTER TABLE Employee ADD CONSTRAINT Employee_Name_chk 
CHECK (REGEXP_LIKE(EmployeeName,'^[a-z \'-]*$'));
**/
create table Department(
  DepartmentID int(11) primary key auto_increment,
  DepartmentName varchar(30) not null
);
/**
ALTER TABLE Department ADD CONSTRAINT Department_Name_chk 
CHECK (REGEXP_LIKE(DepartmentName,'^[a-zA-Z ]*$'));
**/

create table Employee_Department(
  EmployeeID int(11),
  DepartmentID int(11),
  primary key(EmployeeID, DepartmentID),
  foreign key(EmployeeID) references Employee(EmployeeID),
  foreign key(DepartmentID) references Department(DepartmentID)
  );

-- INSERTS FOR EMPLOYEE TABLE --
insert into Employee(EmployeeName, Address, NIN, IBAN, BIC, Salary) 
Values ('Rory Sproule', '73 Craighdarragh Road, Helen\'s Bay', 'PC787878C', 
'GB18HSBC89757643612349', 'KRIDGB0X', 80001.0);
insert into Employee(EmployeeName, Address, NIN, IBAN, BIC, Salary) 
Values ('Marc Templeton', '45 Lockview Rise, Belfast', 'PC806040C', 
'GB18HSBC89757643612350', 'LIDNSB0L', 20000.0);
insert into Employee(EmployeeName, Address, NIN, IBAN, BIC, Salary) 
Values ('Ethan Weatherup', '8 Benefits Street, Larne', 'PC506080C', 
'GB18ULST89757649912350', 'LTESSB0X', 16000.0);
insert into Employee(EmployeeName, Address, NIN, IBAN, BIC, Salary) 
Values ('Ben Andrew', '12 England Street, Cookstown', 'PC806030C', 
'GB18ULST89757649912359', 'LTESGB0X', 80000.0);

insert into Department(DepartmentName) Values ('HR');
insert into Department(DepartmentName) Values ('Sales');
insert into Department(DepartmentName) Values ('Talent');
insert into Department(DepartmentName) Values ('Finance');
insert into Department(DepartmentName) Values ('Software');

insert into Employee_Department(EmployeeID, DepartmentID) Values (1, 2);
insert into Employee_Department(EmployeeID, DepartmentID) Values (2, 2);
insert into Employee_Department(EmployeeID, DepartmentID) Values (2, 3);
insert into Employee_Department(EmployeeID, DepartmentID) Values (1, 4);
insert into Employee_Department(EmployeeID, DepartmentID) Values (3, 5);
insert into Employee_Department(EmployeeID, DepartmentID) Values (4, 5);
insert into Employee_Department(EmployeeID, DepartmentID) Values (4, 1);

-- User Story 2 View --

create view getEmployeesPerDepartment as
  SELECT EmployeeName, DepartmentName
  FROM Employee, Department, Employee_Department
  Where Employee.EmployeeID = Employee_Department.EmployeeID
  AND Department.DepartmentID = Employee_Department.DepartmentID
  ORDER BY DepartmentName;
  
  create view getEmployees as 
  Select EmployeeID as 'id', EmployeeName as 'name', Address as 'address', 
  NIN as 'nin', IBAN as 'iban', BIC as 'bic', Salary as 'salary'
  FROM Employee;
  
