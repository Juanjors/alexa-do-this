package com.alexadothis;

import org.springframework.stereotype.Service;

@Service
public class DoThisService {

	private Runtime runtime = Runtime.getRuntime();

	public Process shutDown() throws Exception {
		System.out.println("Shutting down the system!");
		return this.runtime.exec(DoThisCommands.SHUTDOWN.getCommand());
	}
	
	public Process stopShutdown() throws Exception {
		System.out.println("Stopping shutdown!");
		return this.runtime.exec(DoThisCommands.NOT_SHUTDOWN.getCommand());
	}

}
