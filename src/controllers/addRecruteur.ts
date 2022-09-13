import pool from "../database";
import { Request, Response } from "express";

export const verifyEmail = async (email: string) => {

    try {
        const result = await pool.query(`SELECT email FROM public.recruteur WHERE email='${email}' `);
  
        if (result.rows.length >0  ) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error);
    }
  };

export const addRecruteur = async (req: Request, response: Response) => {
  
  try {
    const {email, nomp, numtel, dns, mlanguage, experience, etablissement, filiere, etude} = req.body;
    if (await verifyEmail(email) === false) {
      
        let sql =`INSERT INTO public.recruteur(
            email, nomp, numtel, dns, mlanguage, experience, etablissement, filiere, etude)
            VALUES ('${email}','${nomp}','${numtel}','${dns}','${mlanguage}','${experience}','${etablissement}','${filiere}','${etude}');`
        const newBook =  await pool.query(sql) 
        const result = await pool.query(`SELECT FROM public.recruteur WHERE email='${email}' `);
            console.log(result)     
        if (newBook.rowCount > 0) {
            response.json({ "error": false, "data": "ADD"});
            console.log("add")
            
      } else {
        response.json({ "error": true, "data": "there's an error !!" });        
      }  
      }
      else{
        response.json({ "error": true, "data": "exist" });
        console.log("No")
      }
  } catch (error) {
    console.log(error);
  }
};