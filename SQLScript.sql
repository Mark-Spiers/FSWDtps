drop database if exists Company;

create database Company;

USE Company;

Drop table if exists Employee;

Create table Employee (
  EmployeeID int unsigned primary key Auto_increment,
  EmployeeName varchar(50) not null,
  Address varchar(100),
  NIN varchar(9) unique not null,
  IBAN varchar(22) unique not null,
  BIC varchar(8) not null,
  Salary decimal(11,2) unsigned
);

-- ALTER TABLE CONSTRAINTS FOR EMPLOYEE --
-- ALTER TABLE Employee ADD CONSTRAINT Employee_Salary_chk 
-- CHECK (Salary >= 16000);
ALTER TABLE Employee ADD CONSTRAINT Employee_NIN_chk 
CHECK (REGEXP_LIKE(NIN,'[a-z&&[^dfiquvo]]{2}[0-9]{6}[abcdfmp]'));
ALTER TABLE Employee ADD CONSTRAINT Employee_IBAN_chk 
CHECK (REGEXP_LIKE(IBAN,'[a-z]{2}+[0-9]{2}+[a-z]{4}+[0-9]{14}+'));
ALTER TABLE Employee ADD CONSTRAINT Employee_BIC_chk 
CHECK (REGEXP_LIKE(BIC,'[a-z]{6}+[0-9][0-9a-z]+'));
ALTER TABLE Employee ADD CONSTRAINT Employee_Name_chk 
CHECK (REGEXP_LIKE(EmployeeName,'^[a-z \'-]*$'));

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