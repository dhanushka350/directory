package com.wedding.directory.repository;

import com.wedding.directory.modal.Broker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrokerRepo extends JpaRepository<Broker, Integer> {

    Broker findTopByNicEquals(String nic);
}
