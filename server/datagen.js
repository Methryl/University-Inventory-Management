module.exports={
    genData: function (con){
        const sampleuserssql = `
        INSERT INTO users (id, name, sname, mail) VALUES 
    (1, 'Marie Belle', 'Khaddage', 'mariebelle.khaddage@gmail.com'),
    (2, 'Iker', 'Floro', 'Floro@gmail.com'),
    (3, 'yoav', 'sternfeld', 'y@gmail.com'),
    (4, 'Yoav', 'Sternfeld', 'Yoav@email.com'),
    (5, 'Balita', 'R', 'Balita@gmail.com'),
    (6, 'Testing', 'idk', 'idk@gmail.com'),
    (7, 'Marie Belle', 'Khaddage', 'mariebelle.khaddage@gmail.com'),
    (8, 'Marie', 'Khaddage34', 'm.khaddage@student.xu-university.de'),
    (9, 'John', 'Doe', 'john.doe@example.com'),
    (10, 'Jane', 'Smith', 'jane.smith@example.com'),
    (11, 'Alice', 'Johnson', 'alice.johnson@example.com'),
    (12, 'Bob', 'Brown', 'bob.brown@example.com'),
    (13, 'Charlie', 'Davis', 'charlie.davis@example.com'),
    (14, 'Emily', 'Wilson', 'emily.wilson@example.com'),
    (15, 'Michael', 'Taylor', 'michael.taylor@example.com'),
    (16, 'Olivia', 'Anderson', 'olivia.anderson@example.com'),
    (17, 'David', 'Martinez', 'david.martinez@example.com'),
    (18, 'Sophia', 'Garcia', 'sophia.garcia@example.com'),
    (19, 'Daniel', 'Rodriguez', 'daniel.rodriguez@example.com') on duplicate key update name = values(name);`;
      con.query(sampleuserssql, function (err, result) {
        if (err) throw err;
      });
      const sapmleassetssql = `
        INSERT INTO assets (id, title, asset_id, company, asset_type, serial_number, assigned_to) VALUES
    (597, 'RODE Handheld adapter for Wireless GO', '3-65-0678', '3 - XU University', '65 - Audio/Speaker', '9881300670', NULL),
    (591, 'RODE Handheld adapter for Wireless GO', '3-65-0680', '3 - XU University', '65 - Audio/Speaker', '9881300670', NULL),
    (590, 'RODE Wireless GO (Dual channel wireless microphone system)', '3-65-0679', '3 - XU University', '65 - Audio/Speaker', 'HH0288495', NULL),
    (589, 'HP EliteBook 840 G4 14"', '3-96-0678', '3 - XU University', '96 - HP Laptops', '5CG94197QL', NULL),
    (588, 'Apple MacBook Pro M1 (2020) 13.3" - Apple M1 - 8 GB RAM, 512 GB', '3-10-0677', '3 - XU University', '10 - Apple Device', 'FVFFV9HGQ05F', NULL),
    (587, 'Apple iPhone 11 - 64 GB - Black', '3-12-0676', '3 - XU University', '12 - Apple Phone', 'FK1C1JKBN735', NULL),
    (586, 'Apple iPhone 11 - 64 GB - Black', '3-12-0675', '3 - XU University', '12 - Apple Phone', 'DX3FP33AN735', NULL),
    (585, 'Apple iPhone 11 - 64 GB - Black', '3-12-0674', '3 - XU University', '12 - Apple Phone', 'F4GC8QM3N735', NULL),
    (584, 'Dell Latitude 5590 15.6" - Intel i5 - 16 GB RAM, 256 GB', '3-95-0673', '3 - XU University', '95 - Dell Laptops', '6TX6XT2', NULL),
    (583, 'Dell Latitude 5590 15.6" - Intel i5 - 16 GB RAM, 256 GB', '3-95-0672', '3 - XU University', '95 - Dell Laptops', 'DNPYQQ2', NULL),
    (582, 'Apple iPhone 11 - 64 GB - Black', '3-12-0583', '3 - XU University', '12 - Apple Phone', 'DX4D1K2QN735', NULL),
    (581, 'iPhone 14, Midnight, 128GB', '3-12-0671', '3 - XU University', '12 - Apple Phone', 'WY255F6Y17', NULL),
    (580, 'Logitech H390 USB computer headset', '3-45-0670', '3 - XU University', '45 - Laptop Accessories', '2229ME061WW9', NULL),
    (579, 'Lenovo go wired ANC Headset', '3-45-0669', '3 - XU University', '45 - Laptop Accessories', 'AL38011T', NULL),
    (578, 'Lenovo go wired ANC Headset', '3-45-0668', '3 - XU University', '45 - Laptop Accessories', 'AL380BND', NULL),
    (577, 'Lenovo go wired ANC Headset', '3-45-0667', '3 - XU University', '45 - Laptop Accessories', 'AL380BPO', NULL),
    (576, 'Lenovo go wired ANC Headset', '3-45-0666', '3 - XU University', '45 - Laptop Accessories', 'AL380BQY', NULL),
    (575, 'Dell Ultrashape 25 USB C monitor', '3-30-0665', '3 - XU University', '30 - TV/Screen', 'CN-0MWN1J-QDC00-25B-142L-A09', NULL),
    (574, 'Dell Ultrashape 25 USB C monitor', '3-30-0664', '3 - XU University', '30 - TV/Screen', 'CN-0MWN1J-QDC00-25B-143L-A09', NULL),
    (572, 'Dell Ultrashape 25 USB C monitor', '3-30-0663', '3 - XU University', '30 - TV/Screen', 'CN-0MWN1J-QDC00-25B-141L-A09', NULL),
    (571, 'Dell Ultrashape 25 USB C monitor', '3-30-0662', '3 - XU University', '30 - TV/Screen', 'CN-0MWN1J-QDC00-25B-13XL-A09', NULL),
    (570, 'Dell Ultrashape 25 USB C monitor', '3-30-0661', '3 - XU University', '30 - TV/Screen', 'CN-0MWN1J-QDC00-25B-13TL-A09', NULL),
    (569, 'Dell Ultrashape 25 USB C monitor', '3-30-0660', '3 - XU University', '30 - TV/Screen', 'CN-0MWN1J-QDC00-23D-OILL-A09', NULL),
    (568, 'Dell Ultrashape 25 USB C monitor', '3-30-0659', '3 - XU University', '30 - TV/Screen', 'CN-0MWN1J-QDC00-25B-140L-A09', NULL),
    (567, 'Dell Ultrashape 25 USB C monitor', '3-30-0658', '3 - XU University', '30 - TV/Screen', 'CN-0MWN1J-QDC00-23D-013L-A09', NULL),
    (566, 'Dell Ultrashape 25 USB C monitor', '3-30-0657', '3 - XU University', '30 - TV/Screen', 'CN-0MWN1J-QDC00-25B-13UL-A09', NULL),
    (565, 'Dell Ultrashape 25 USB C monitor', '3-30-0656', '3 - XU University', '30 - TV/Screen', 'CN-0MWN1J-QDC00-25B-13YL-A09', NULL),
    (564, 'Dell Ultrashape 25 USB C monitor', '3-30-0655', '3 - XU University', '30 - TV/Screen', 'CN-0MWN1J-QDC00-23C-0DBL-A09', NULL),
    (563, '1 white cable USB-A to USB-C', '3-45-0654', '3 - XU University', '45 - Laptop Accessories', '0', NULL),
    (562, 'POLY Blackwire 5220 headset', '3-45-0663', '3 - XU University', '45 - Laptop Accessories', 'F6AK44', NULL),
    (558, 'EarFun Air true Wireless Earbuds', '3-45-0661', '3 - XU University', '45 - Laptop Accessories', 'X00180LBZT', NULL),
    (557, 'GIISSMO 7 IN 2 USB C Hub', '3-45-9000', '3 - XU University', '45 - Laptop Accessories', 'X001FK5FUR', NULL),
    (556, 'Video conference lights JSK- B1', '3-45-0660', '3 - XU University', '45 - Laptop Accessories', '004', NULL),
    (555, 'Video conference lights JSK- B1', '3-45-0659', '3 - XU University', '45 - Laptop Accessories', '003', NULL),
    (554, 'RODE Wireless GO (Dual channel wireless microphone system)', '3-65-0677', '3 - XU University', '65 - Audio/Speaker', 'HH0288496', NULL),
    (553, 'HP EliteBook 840 G4 14"', '3-96-0679', '3 - XU University', '97 - HP Laptops', '5CG94197QL', NULL),
    (552, 'Apple MacBook Pro M1 (2020) 13.3" - Apple M1 - 8 GB RAM, 512 GB', '3-10-0678', '3 - XU University', '11 - Apple Device', 'FVFFV9HGQ05F', NULL),
    (549, 'iPhone 13 Pro Max 1TB Graphite', '3-12-0654', '3 - XU University', '12 - Apple Phone', 'XX07T607WG', NULL),
    (548, 'Logitech M650 L Mouse', '3-45-0653', '3 - XU University', '45 - Laptop Accessories', '2149LZ07ZYE9', NULL),
    (547, 'Wireless GO II Compact Wireless Microphone System', '3-45-0652', '3 - XU University', '45 - Laptop Accessories', 'GX0029068', NULL),
    (546, 'Lavalier professional wearable microphone', '3-45-0651', '3 - XU University', '45 - Laptop Accessories', 'CX0458058', NULL),
    (545, 'iPhone 11', '3-12-0650', '3 - XU University', '12 - Apple Phone', 'JY200267', NULL) on duplicate key update title = values(title);`;
      con.query(sapmleassetssql, function (err, result) {
        if (err) throw err;
      });
    }
}

