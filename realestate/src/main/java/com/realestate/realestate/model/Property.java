package com.realestate.realestate.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String description;
    private BigDecimal price;
    private String address;
    private String city;
    private String state;
    private int bedrooms;
    private int bathrooms;
    private int areaSqft;
    
    @Enumerated(EnumType.STRING)
    private PropertyType propertyType;
}

enum PropertyType {
    APARTMENT, VILLA, PLOT, COMMERCIAL
}