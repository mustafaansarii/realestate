
package com.realestate.realestate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.realestate.realestate.model.Property;
import com.realestate.realestate.services.PropertieServices;    

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "*")
public class PropertyController {
    
    @Autowired
    private PropertieServices propertieServices;
    
    @GetMapping
    public List<Property> getAllProperties() {
        return propertieServices.getAllProperties();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Property> getPropertyById(@PathVariable Long id) {
        return ResponseEntity.ok(propertieServices.getPropertyById(id));
    }
    
    @PostMapping
    public Property createProperty(@RequestBody Property property) {
        return propertieServices.createProperty(property);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Property> updateProperty(
            @PathVariable Long id, 
            @RequestBody Property propertyDetails) {
        
        return ResponseEntity.ok(propertieServices.updateProperty(id, propertyDetails));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProperty(@PathVariable Long id) {
        propertieServices.deleteProperty(id);
        return ResponseEntity.ok().build();
    }
    
}