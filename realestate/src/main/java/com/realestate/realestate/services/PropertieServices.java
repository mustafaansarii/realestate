package com.realestate.realestate.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.realestate.realestate.model.Property;
import com.realestate.realestate.repository.PropertyRepository;

@Service
public class PropertieServices {
    
    @Autowired
    private PropertyRepository propertyRepository;
    
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }   
    
    public Property getPropertyById(Long id) {
        return propertyRepository.findById(id)
                .orElse(null);
    }
    
    public Property createProperty(Property property) {
        return propertyRepository.save(property);
    }
    
    public Property updateProperty(Long id, Property propertyDetails) {
        Property property = propertyRepository.findById(id)
                .orElse(null);
        if (property != null) {
            property.setTitle(propertyDetails.getTitle());
            property.setDescription(propertyDetails.getDescription());
            property.setPrice(propertyDetails.getPrice());
            property.setAddress(propertyDetails.getAddress());
            property.setCity(propertyDetails.getCity());
            property.setState(propertyDetails.getState());
            property.setBedrooms(propertyDetails.getBedrooms());
            property.setBathrooms(propertyDetails.getBathrooms());
            property.setAreaSqft(propertyDetails.getAreaSqft());
            property.setPropertyType(propertyDetails.getPropertyType());
            return propertyRepository.save(property);
        }
        return null;
    }
    
    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }
}
