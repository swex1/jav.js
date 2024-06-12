// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
contract functionAthematic{
    function addition(uint a, uint b) external pure returns (uint){
    return a+b;
   }
   function substraction(uint a, uint b)external pure returns (uint){
    return a-b;
   }
   function multiplication(uint a, uint b)external pure returns (uint){
    return a*b;
   }
   function division(uint a, uint b)external pure returns (uint){
    return a/b;
   }
}
