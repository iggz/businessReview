insert into users
    (first_name, last_name, email)
values
    ('Sean', 'Reid', 'sean@digitalcrafts.com')
;

insert into business
    (business, address, category)
values
    ('Chipotle', '3424 Piedmont Rd NE, Atlanta, GA 30305', 'Restaurant')
;

insert into reviews
    (score, content, business_id, user_id)
values
    (4, 'Yum Yum Yum', 1, 1)
;