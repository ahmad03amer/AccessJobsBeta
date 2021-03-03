package com.accessjobs.pjp.controllers;

import com.accessjobs.pjp.domain.Job;
import com.accessjobs.pjp.services.JobService;
import com.accessjobs.pjp.exceptions.MapValidationErrorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Locale;

@RestController
@RequestMapping("/api/job")
@CrossOrigin //to hit the backend server when connect from the frontend server
public class JobController {

    @Autowired
    private JobService jobService;
    @Autowired
    private MapValidationErrorsService mapValidationErrorsService;

    //@valid annotation to validate the object attributes and , i used the following code FieldErrors to display the list of errors from validation
    @PostMapping("")
    @CrossOrigin
    public ResponseEntity<?> add(@Valid @RequestBody Job job, BindingResult result){

       ResponseEntity<?> errorMap = mapValidationErrorsService.mapValidationService(result);
       if(errorMap != null) return errorMap;
       
        Job tempJob =  jobService.add(job);
        return new ResponseEntity<Job>(tempJob, HttpStatus.CREATED);
    }

    @GetMapping("/{jobIdentifier}")
    public ResponseEntity<?> getJobByIdentifier(@PathVariable String jobIdentifier){
        Job job = jobService.findJobByIdentifier(jobIdentifier);
        return new ResponseEntity<Job>(job,HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Job> getAllJobs(){
        //we dont need to do any handling , cuz if there are no objects , it will return an empty list
        return jobService.findAllJobs();
    }

    @DeleteMapping("{jobIdentifier}")
    public ResponseEntity<?> deleteJobByIdentifier(@PathVariable String jobIdentifier){
        jobService.deleteJobByIdentifier(jobIdentifier);
        return new ResponseEntity<String>("Job with identifier '"+jobIdentifier.toUpperCase(Locale.ROOT)+"' was deleted successfuly",HttpStatus.OK);
    }
}
