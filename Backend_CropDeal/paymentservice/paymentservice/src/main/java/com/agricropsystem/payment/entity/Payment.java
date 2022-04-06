package com.agricropsystem.payment.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="paymentDetails")
public class Payment {
	
            long number;
            String pinnumber;
            double amount;
            public Payment() {
            	super();
            }
			public long getNumber() {
				return number;
			}
			public void setNumber(long number) {
				this.number = number;
			}
			public String getPinnumber() {
				return pinnumber;
			}
			public void setPinnumber(String pinnumber) {
				this.pinnumber = pinnumber;
			}
			public double getAmount() {
				return amount;
			}
			public void setAmount(double amount) {
				this.amount = amount;
			}
			public Payment(long number, String pinnumber, double amount) {
				super();
				this.number = number;
				this.pinnumber = pinnumber;
				this.amount = amount;
			}
			
            
}
