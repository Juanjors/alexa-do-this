package com.alexadothis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DoThisController {
	
	@Autowired
	private DoThisService cmdService;
	
	@RequestMapping(value = "/shutdown", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String shutDown() throws Exception {
		this.cmdService.shutDown();
		return "Apagando sistema";
	}

	
	@RequestMapping(value = "/stopshutdown", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String stopShutdown() throws Exception {
		this.cmdService.stopShutdown();
		return "Apagado cancelado";
	}
}
